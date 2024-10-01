//Tue Oct 01 2024 10:20:04 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("赚汪贝兑礼品");
const _0x203f5e = $.isNode() ? require("./jdCookie.js") : "";
const _0xf1196c = require("crypto-js");
const _0x44ee94 = require("./function/dylany");
const _0x160c11 = require("./USER_AGENTS");
let _0x4d7f8e = [];
let _0x3c7287 = "";
$.isNode() ? (Object.keys(_0x203f5e).forEach(_0x2224fe => {
  _0x4d7f8e.push(_0x203f5e[_0x2224fe]);
}), process.env.JD_DEBUG && process.env.JD_DEBUG === "false" && (console.log = () => {})) : _0x4d7f8e = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x367064($.getdata("CookiesJD") || "[]").map(_0x45bf40 => _0x45bf40.cookie)].filter(_0x449a6f => !!_0x449a6f);
$.hotFlag = false;
$.outFlag = false;
$.activityEnd = false;
$.activityId = "ba6e852dd2bc05a1de75b2d2dc9fda305096bcc0";
$.activityURL = "https://pro.m.jd.com/mall/active/472hYWPS9d6GP7xtJzsWscXepKZf/index.html";
!(async () => {
  if (!_0x4d7f8e[0]) {
    const _0x45738d = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x45738d);
    return;
  }
  console.log("版本：20240906");
  console.log("问题建议TG：https://t.me/dylan_jdpro");
  console.log("活动入口: APP首页--京东超市--底部游戏菜单");
  for (let _0x15055e = 0; _0x15055e < _0x4d7f8e.length; _0x15055e++) {
    _0x3c7287 = _0x4d7f8e[_0x15055e];
    if (_0x3c7287) {
      $.UserName = decodeURIComponent(_0x3c7287.match(/pt_pin=([^; ]+)(?=;?)/) && _0x3c7287.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x15055e + 1;
      $.bean = 0;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********");
      $.UA = _0x160c11.UARAM ? _0x160c11.UARAM() : _0x160c11.USER_AGENT;
      await _0xa86453();
      if ($.outFlag || $.activityEnd) {
        {
          break;
        }
      }
      await $.wait(parseInt(Math.random() * 5000 + 5000, 10));
    }
  }
})().catch(_0x460d94 => $.logErr(_0x460d94)).finally(() => $.done());
async function _0xa86453() {
  try {
    $.Token = "";
    $.taskList_op = [];
    $.taskList_er = [];
    $.energy = 0;
    $.score = 0;
    $.nofen = false;
    $.x_api_eid_token = "jdd03" + _0x3a08d1(122, "234567abcdefghijklmnopqrstuvwxyzABCDEFIJKLMNOPQRSTUVWXYZ").toUpperCase() + "X";
    await _0x71860f("arvr_getRequestToken");
    if (!$.Token) {
      {
        console.log("获取token失败");
        return;
      }
    }
    await _0x71860f("arvr_queryInteractiveInfoNew");
    if ($.isLogin == false) {
      return;
    }
    if ($.taskList_er.length >= 1) {
      $.log("\n开始日常任务领体力...");
      $.itemId = "";
      for (let _0x5539b8 of $.taskList_er) {
        let _0xb6eb6f = _0x5539b8.assignmentTimesLimit - _0x5539b8.completionCnt;
        if (_0x5539b8.completionFlag == true) {
          console.log(_0x5539b8.assignmentName + "----已完成");
        } else {
          if ([0, 5].includes(_0x5539b8.assignmentType)) {
            console.log("去做  " + _0x5539b8.assignmentName);
            $.subTaskId = _0x5539b8.encryptAssignmentId;
            $.actionType = 3;
            await _0x71860f("arvr_doInteractiveAssignmentNew");
          } else {
            if (_0x5539b8.assignmentType == 1) {
              {
                let _0x2ad404 = _0x5539b8.ext.waitDuration || 1;
                let _0x554a10 = _0x5539b8.ext.extraType;
                for (let _0xed1abe = 0; _0xed1abe < _0xb6eb6f; _0xed1abe++) {
                  {
                    console.log("去做  " + _0x5539b8.assignmentName);
                    $.subTaskId = _0x5539b8.encryptAssignmentId;
                    $.itemId = JSON.stringify(_0x5539b8.ext) != "{}" && _0x5539b8.ext[_0x554a10].length > _0xed1abe ? _0x5539b8.ext[_0x554a10][_0xed1abe].itemId : "";
                    if ($.itemId == "") {
                      continue;
                    }
                    $.actionType = 1;
                    await _0x71860f("arvr_doInteractiveAssignmentNew");
                    await $.wait(parseInt(Math.random() * 1000 + _0x2ad404 * 1000, 10));
                    $.actionType = 0;
                    await _0x71860f("arvr_doInteractiveAssignmentNew");
                    await $.wait(parseInt(Math.random() * 500 + 1000, 10));
                  }
                }
              }
            } else {
              if ([3, 4, 7].includes(_0x5539b8.assignmentType)) {
                {
                  let _0x5c65fa = _0x5539b8.ext.waitDuration || 1;
                  let _0x2bf70e = _0x5539b8.ext.extraType;
                  for (let _0x5ebf41 = 0; _0x5ebf41 < _0xb6eb6f; _0x5ebf41++) {
                    console.log("去做 " + _0x5539b8.assignmentName);
                    $.subTaskId = _0x5539b8.encryptAssignmentId;
                    $.itemId = JSON.stringify(_0x5539b8.ext) != "{}" && _0x5539b8.ext[_0x2bf70e].length > _0x5ebf41 ? _0x5539b8.ext[_0x2bf70e][_0x5ebf41].itemId : "";
                    if ($.itemId == "") {
                      continue;
                    }
                    $.actionType = 2;
                    await _0x71860f("arvr_doInteractiveAssignmentNew");
                    await $.wait(parseInt(Math.random() * 1000 + _0x5c65fa * 1000, 10));
                    await $.wait(parseInt(Math.random() * 500 + 500, 10));
                  }
                }
              } else {
                if ([9].includes(_0x5539b8.assignmentType)) {
                  {
                    console.log("去做  分享任务");
                    for (let _0x2cfce6 = 0; _0x2cfce6 < _0xb6eb6f; _0x2cfce6++) {
                      $.encryptAssignmentId = _0x5539b8.encryptAssignmentId;
                      await _0x71860f("arvr_rewardNew");
                      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    await _0x71860f("arvr_queryInteractiveRewardInfo");
    console.log("\n体力余额: " + $.energy + "\n");
    await _0x71860f("arvr_queryInteractiveInfoNew_wb");
    if ($.taskList_op.length >= 1) {
      {
        console.log("\n开始做经营事件...");
        for (let _0x5a5b58 of $.taskList_op) {
          if (_0x5a5b58.timeStatus == 1) {
            {
              if (_0x5a5b58.completionFlag == true || _0x5a5b58.completionCnt - _0x5a5b58.assignmentTimesLimit == 0) {
                console.log(_0x5a5b58.assignmentName + "----已完成");
                continue;
              }
              if (!(_0x5a5b58.exchangeRate >= 1000 && _0x5a5b58.assignmentType == 30)) {
                if ([30, 0].includes(_0x5a5b58.assignmentType)) {
                  if ($.energy < _0x5a5b58.exchangeRate) {
                    console.log(_0x5a5b58.assignmentName + "----体力不够");
                    continue;
                  }
                  console.log("去做 " + _0x5a5b58.assignmentName);
                  $.subTaskId = _0x5a5b58.encryptAssignmentId || "";
                  _0x5a5b58.exchangeRate == 0 ? (await _0x71860f("arvr_doInteractiveAssignmentNew_wb"), await $.wait(parseInt(Math.random() * 1000 + 1000, 10))) : (await _0x71860f("arvr_doInteractiveAssignmentNew_wb"), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)), $.energy -= _0x5a5b58.exchangeRate);
                }
              }
            }
          } else {
            _0x5a5b58.timeStatus == 2;
          }
        }
      }
    }
    await _0x71860f("arvr_queryInteractiveRewardInfo_wb");
    console.log("\n汪贝余额: " + $.score);
  } catch (_0x42b195) {
    console.log(_0x42b195.message);
  }
}
async function _0x71860f(_0x211cbf) {
  if ($.outFlag) {
    {
      return;
    }
  }
  let _0x4e4033 = "https://api.m.jd.com";
  let _0x5df0b6 = "";
  let _0x184665 = "post";
  let _0x110a32 = {};
  let _0x4f2ed2 = "";
  let _0x55540a = {};
  let _0x358e3a = "";
  let _0x2e5487 = {};
  let _0x2e59d3 = {};
  switch (_0x211cbf) {
    case "meta2LoginGame":
      _0x358e3a = _0x4e4033 + "/api/meta2LoginGame";
      const _0x426a58 = {
        channel: "2",
        roomId: "90"
      };
      _0x55540a = _0x426a58;
      _0x5df0b6 = "appid=commonActivity&functionId=meta2LoginGame&body=" + encodeURIComponent(JSON.stringify(_0x55540a)) + "&t=" + Date.now();
      break;
    case "arvrMeta2RoomSortListByTemplateId":
      _0x358e3a = _0x4e4033 + "/api/arvrMeta2RoomSortListByTemplateId";
      _0x5df0b6 = "appid=commonActivity&functionId=arvrMeta2RoomSortListByTemplateId&body=%7B%22templateId%22%3A%22790088977%22%7D&t=" + Date.now();
      break;
    case "arvr_getRequestToken":
      _0x358e3a = _0x4e4033 + "/api/arvr_getRequestToken";
      _0x2e5487 = _0x2bc736({
        rewardType: 6,
        activityId: $.activityId,
        appId: "app_440"
      });
      const _0x5730f3 = {
        rewardType: 6,
        activityId: $.activityId,
        appId: "app_440",
        timestamp: _0x2e5487.timestamp,
        sign: _0x2e5487.sign,
        signKey: _0x2e5487.signKey
      };
      _0x55540a = _0x5730f3;
      _0x5df0b6 = "appid=commonActivity&functionId=arvr_getRequestToken&body=" + encodeURIComponent(JSON.stringify(_0x55540a)) + "&t=" + Date.now();
      break;
    case "arvr_queryInteractiveInfoNew":
      _0x358e3a = _0x4e4033 + "/api/arvr_queryInteractiveInfoNew";
      _0x2e5487 = _0x2bc736({
        projectId: "1753589",
        projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
        sourceCode: 2,
        channel: 2
      });
      const _0x3e5eba = {
        projectId: "1753589",
        projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
        sourceCode: 2,
        channel: 2,
        timestamp: _0x2e5487.timestamp,
        sign: _0x2e5487.sign,
        signKey: _0x2e5487.signKey
      };
      _0x55540a = _0x3e5eba;
      _0x5df0b6 = "appid=commonActivity&functionId=arvr_queryInteractiveInfoNew&body=" + encodeURIComponent(JSON.stringify(_0x55540a)) + "&t=" + Date.now();
      break;
    case "arvr_queryInteractiveInfoNew_wb":
      _0x358e3a = _0x4e4033 + "/api/arvr_queryInteractiveInfoNew";
      _0x2e5487 = _0x2bc736({
        projectId: "1764671",
        projectKey: "2nym8aW7jNKRbmxXLdbb75m3ebSH",
        sourceCode: 2,
        queryTypes: 6,
        channel: 2
      });
      const _0x390f8c = {
        projectId: "1764671",
        projectKey: "2nym8aW7jNKRbmxXLdbb75m3ebSH",
        sourceCode: 2,
        channel: "2",
        queryTypes: 6,
        timestamp: _0x2e5487.timestamp,
        sign: _0x2e5487.sign,
        signKey: _0x2e5487.signKey
      };
      _0x55540a = _0x390f8c;
      _0x5df0b6 = "appid=commonActivity&functionId=arvr_queryInteractiveInfoNew&body=" + encodeURIComponent(JSON.stringify(_0x55540a)) + "&t=" + Date.now();
      break;
    case "arvr_rewardNew":
      _0x358e3a = _0x4e4033 + "/api/arvr_rewardNew";
      _0x2e5487 = _0x2bc736({
        projectId: "1753589",
        projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
        sourceCode: 2,
        channel: "2",
        encryptAssignmentId: $.encryptAssignmentId,
        completionFlag: true,
        rewardType: 0
      });
      const _0x25fcc2 = {
        projectId: "1753589",
        projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
        sourceCode: 2,
        channel: "2",
        encryptAssignmentId: $.encryptAssignmentId,
        completionFlag: true,
        rewardType: 0,
        timestamp: _0x2e5487.timestamp,
        sign: _0x2e5487.sign,
        signKey: _0x2e5487.signKey
      };
      _0x55540a = _0x25fcc2;
      _0x110a32 = {
        appId: "e3b36",
        fn: "arvr_rewardNew",
        body: _0x55540a,
        apid: "commonActivity",
        ver: $.UA.split(";")[2],
        cl: "ios",
        user: $.UserName,
        ua: $.UA
      };
      _0x4f2ed2 = await _0x44ee94.getbody(_0x110a32);
      _0x5df0b6 = _0x4f2ed2 + "&x-api-eid-token=" + $.x_api_eid_token;
      break;
    case "arvr_queryInteractiveRewardInfo":
      _0x358e3a = _0x4e4033 + "/api/arvr_queryInteractiveRewardInfo";
      _0x2e5487 = _0x2bc736({
        pageSize: 10,
        currentPage: 1,
        projectId: "1753589",
        projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
        sourceCode: 2,
        needExchangeRestScore: 1
      });
      const _0x1c5af5 = {
        pageSize: 10,
        currentPage: 1,
        projectId: "1753589",
        projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
        sourceCode: 2,
        needExchangeRestScore: 1,
        timestamp: _0x2e5487.timestamp,
        sign: _0x2e5487.sign,
        signKey: _0x2e5487.signKey
      };
      _0x55540a = _0x1c5af5;
      _0x5df0b6 = "appid=commonActivity&functionId=arvr_queryInteractiveRewardInfo&body=" + encodeURIComponent(JSON.stringify(_0x55540a)) + "&t=" + Date.now();
      break;
    case "arvr_queryInteractiveRewardInfo_wb":
      _0x358e3a = _0x4e4033 + "/api/arvr_queryInteractiveRewardInfo";
      _0x2e5487 = _0x2bc736({
        pageSize: 10,
        currentPage: 1,
        projectId: "1764671",
        projectKey: "2nym8aW7jNKRbmxXLdbb75m3ebSH",
        sourceCode: 2,
        needExchangeRestScore: 1
      });
      const _0x48902d = {
        pageSize: 10,
        currentPage: 1,
        projectId: "1764671",
        projectKey: "2nym8aW7jNKRbmxXLdbb75m3ebSH",
        sourceCode: 2,
        needExchangeRestScore: 1,
        timestamp: _0x2e5487.timestamp,
        sign: _0x2e5487.sign,
        signKey: _0x2e5487.signKey
      };
      _0x55540a = _0x48902d;
      _0x5df0b6 = "appid=commonActivity&functionId=arvr_queryInteractiveRewardInfo&body=" + encodeURIComponent(JSON.stringify(_0x55540a)) + "&t=" + Date.now();
      break;
    case "arvr_doInteractiveAssignmentNew":
      _0x358e3a = _0x4e4033 + "/api/arvr_doInteractiveAssignmentNew";
      const _0x8cf861 = {
        projectId: "1753589",
        projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
        sourceCode: 2,
        channel: 2,
        accessToken: $.Token,
        subTaskId: $.subTaskId,
        subTaskIdSecret: true
      };
      _0x2e59d3 = _0x8cf861;
      if ([0, 1].includes($.actionType)) {
        const _0x353086 = {
          projectId: "1753589",
          projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
          sourceCode: 2,
          channel: 2,
          accessToken: $.Token,
          subTaskId: $.subTaskId,
          itemId: $.itemId,
          actionType: $.actionType,
          subTaskIdSecret: true
        };
        _0x2e59d3 = _0x353086;
      } else {
        if ([2].includes($.actionType)) {
          {
            const _0x463b16 = {
              projectId: "1753589",
              projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
              sourceCode: 2,
              channel: 2,
              accessToken: $.Token,
              subTaskId: $.subTaskId,
              itemId: $.itemId,
              subTaskIdSecret: true
            };
            _0x2e59d3 = _0x463b16;
          }
        }
      }
      if ($.itemId != "") {
        {
          _0x2e5487 = _0x2bc736(_0x2e59d3);
          _0x2e59d3.itemId = $.itemId || "";
          if ($.actionType == 2) {
            {
              const _0x249afe = {
                projectId: "1753589",
                projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
                sourceCode: 2,
                channel: "2",
                accessToken: $.Token,
                subTaskId: $.subTaskId,
                subTaskIdSecret: true,
                itemId: $.itemId,
                timestamp: _0x2e5487.timestamp,
                sign: _0x2e5487.sign,
                signKey: _0x2e5487.signKey
              };
              _0x55540a = _0x249afe;
            }
          } else {
            const _0x1daa33 = {
              projectId: "1753589",
              projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
              sourceCode: 2,
              channel: "2",
              accessToken: $.Token,
              subTaskId: $.subTaskId,
              subTaskIdSecret: true,
              itemId: $.itemId,
              actionType: $.actionType,
              timestamp: _0x2e5487.timestamp,
              sign: _0x2e5487.sign,
              signKey: _0x2e5487.signKey
            };
            _0x55540a = _0x1daa33;
          }
        }
      } else {
        {
          _0x2e5487 = _0x2bc736(_0x2e59d3);
          if ($.actionType == 2) {
            const _0x49fb46 = {
              projectId: "1753589",
              projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
              sourceCode: 2,
              channel: "2",
              accessToken: $.Token,
              subTaskId: $.subTaskId,
              subTaskIdSecret: true,
              itemId: $.itemId,
              timestamp: _0x2e5487.timestamp,
              sign: _0x2e5487.sign,
              signKey: _0x2e5487.signKey
            };
            _0x55540a = _0x49fb46;
          } else {
            {
              const _0x2107c7 = {
                projectId: "1753589",
                projectKey: "4HT4fFeDbw11QaPmWvhdWctUQqn3",
                sourceCode: 2,
                channel: "2",
                accessToken: $.Token,
                subTaskId: $.subTaskId,
                subTaskIdSecret: true,
                timestamp: _0x2e5487.timestamp,
                sign: _0x2e5487.sign,
                signKey: _0x2e5487.signKey
              };
              _0x55540a = _0x2107c7;
            }
          }
        }
      }
      _0x110a32 = {
        appId: "84692",
        fn: "arvr_doInteractiveAssignmentNew",
        body: _0x55540a,
        apid: "commonActivity",
        ver: $.UA.split(";")[2],
        cl: "ios",
        user: $.UserName,
        ua: $.UA
      };
      _0x4f2ed2 = await _0x44ee94.getbody(_0x110a32);
      _0x5df0b6 = _0x4f2ed2 + "&x-api-eid-token=" + $.x_api_eid_token;
      break;
    case "arvr_doInteractiveAssignmentNew_wb":
      _0x358e3a = _0x4e4033 + "/api/arvr_doInteractiveAssignmentNew";
      _0x2e5487 = _0x2bc736({
        projectId: "1764671",
        projectKey: "2nym8aW7jNKRbmxXLdbb75m3ebSH",
        sourceCode: 2,
        channel: 2,
        accessToken: $.Token,
        subTaskId: $.subTaskId,
        exchangeNum: 1,
        subTaskIdSecret: true
      });
      const _0x3e8ed5 = {
        projectId: "1764671",
        projectKey: "2nym8aW7jNKRbmxXLdbb75m3ebSH",
        sourceCode: 2,
        channel: "2",
        accessToken: $.Token,
        subTaskId: $.subTaskId,
        subTaskIdSecret: true,
        exchangeNum: 1,
        timestamp: _0x2e5487.timestamp,
        sign: _0x2e5487.sign,
        signKey: _0x2e5487.signKey
      };
      _0x55540a = _0x3e8ed5;
      _0x110a32 = {
        appId: "84692",
        fn: "arvr_doInteractiveAssignmentNew",
        body: _0x55540a,
        apid: "commonActivity",
        ver: $.UA.split(";")[2],
        cl: "ios",
        user: $.UserName,
        ua: $.UA
      };
      _0x4f2ed2 = await _0x44ee94.getbody(_0x110a32);
      _0x5df0b6 = _0x4f2ed2 + "&x-api-eid-token=" + $.x_api_eid_token;
      break;
    default:
      console.log("" + _0x211cbf);
  }
  let _0x40c222 = _0x5ded2a(_0x358e3a, _0x5df0b6, _0x184665);
  return new Promise(async _0x3a6c25 => {
    {
      $.post(_0x40c222, async (_0x25649e, _0x174c91, _0x1fe606) => {
        try {
          _0x25649e ? (_0x174c91 && typeof _0x174c91.statusCode != "undefined" && _0x174c91.statusCode == 493 && (console.log("ip可能被限制，过10分钟后再执行脚本\n"), $.outFlag = true), console.log("" + $.toStr(_0x25649e, _0x25649e))) : _0x4118d0(_0x211cbf, _0x1fe606);
        } catch (_0x5d0ec0) {
          console.log(_0x5d0ec0, _0x174c91);
        } finally {
          _0x3a6c25();
        }
      });
    }
  });
}
function _0x4118d0(_0x2e1acd, _0x1510e2) {
  let _0x2ba3cd = "";
  try {
    _0x1510e2 && (_0x2ba3cd = JSON.parse(_0x1510e2));
  } catch (_0x5a1116) {
    {
      console.log(_0x2e1acd + " 执行任务异常");
      console.log(_0x1510e2 + "->" + _0x5a1116);
      $.runFalag = false;
    }
  }
  try {
    switch (_0x2e1acd) {
      case "meta2LoginGame":
      case "arvrMeta2RoomSortListByTemplateId":
        break;
      case "arvr_getRequestToken":
        _0x2ba3cd.code == 200 && ($.Token = _0x2ba3cd.data);
        break;
      case "arvr_queryInteractiveInfoNew":
        $.isLogin = _0x2ba3cd.login || false;
        if (_0x2ba3cd.subCode == 0) {
          {
            $.taskList_er = _0x2ba3cd.assignmentList || [];
            $.projectName = _0x2ba3cd.projectName;
          }
        } else {
          console.log(_0x1510e2);
        }
        break;
      case "arvr_queryInteractiveInfoNew_wb":
        $.isLogin = _0x2ba3cd.login || false;
        _0x2ba3cd.subCode == 0 ? ($.taskList_op = _0x2ba3cd.assignmentList || [], $.projectName = _0x2ba3cd.projectName) : console.log(_0x1510e2);
        break;
      case "arvr_queryInteractiveRewardInfo":
        _0x2ba3cd.subCode == 0 && ($.energy = _0x2ba3cd.scoreInfoMap.usable || 0);
        break;
      case "arvr_queryInteractiveRewardInfo_wb":
        if (_0x2ba3cd.subCode == 0) {
          {
            $.score = _0x2ba3cd.scoreInfoMap.usable || 0;
          }
        }
        break;
      case "arvr_doInteractiveAssignmentNew":
      case "arvr_rewardNew":
        if (_0x2ba3cd.subCode == 0) {
          if (JSON.stringify(_0x2ba3cd.rewardsInfo.successRewards) !== "{}") {
            {
              console.log("获得: " + _0x2ba3cd.rewardsInfo.successRewards["1"].quantity + "体力⚡");
            }
          } else {
            console.log(_0x1510e2);
          }
        }
        break;
      case "arvr_doInteractiveAssignmentNew_wb":
        if (_0x2ba3cd.subCode == 0) {
          {
            JSON.stringify(_0x2ba3cd.rewardsInfo.successRewards) !== "{}" ? console.log("获得: " + _0x2ba3cd.rewardsInfo.successRewards["1"].quantity + "汪贝🥰") : console.log(_0x1510e2);
          }
        } else {
          console.log(_0x1510e2);
        }
        break;
      default:
        console.log(_0x2e1acd + "-> " + JSON.stringify(_0x2ba3cd));
    }
  } catch (_0x2b4517) {
    console.log(_0x2b4517);
  }
}
function _0x5ded2a(_0x2c957c, _0x2d5219, _0x2c4736 = "post") {
  const _0x3c0aa2 = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://pro.m.jd.com",
    Cookie: _0x3c7287,
    "User-Agent": $.UA,
    "X-Requested-With": "com.jingdong.app.mall"
  };
  _0x2c957c.indexOf("https://api.m.jd.com") > -1 && (_0x3c0aa2.Referer = "" + $.activityURL);
  const _0x1e80ff = {
    url: _0x2c957c,
    method: _0x2c4736,
    headers: _0x3c0aa2,
    body: _0x2d5219,
    timeout: 30000
  };
  return _0x1e80ff;
}
function _0x3a08d1(_0x4b674a, _0x254d61) {
  _0x4b674a = _0x4b674a || 32;
  let _0x311c60 = _0x254d61;
  let _0x4107e2 = _0x311c60.length;
  let _0x27bc62 = "";
  for (i = 0; i < _0x4b674a; i++) {
    _0x27bc62 += _0x311c60.charAt(Math.floor(Math.random() * _0x4107e2));
  }
  return _0x27bc62;
}
function _0x367064(_0x16bd69) {
  if (typeof _0x16bd69 == "string") {
    try {
      {
        return JSON.parse(_0x16bd69);
      }
    } catch (_0xe22e61) {
      {
        console.log(_0xe22e61);
        $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
        return [];
      }
    }
  }
}
function _0x2bc736(_0x65fb16) {
  let _0x19a87d = "";
  let _0x5658c3 = Object.keys(_0x65fb16).sort(function (_0x57f892, _0x3e8b00) {
    return _0x57f892.localeCompare(_0x3e8b00);
  });
  for (let _0x41ee89 of _0x5658c3) {
    {
      _0x19a87d = _0x19a87d.concat(_0x65fb16[_0x41ee89]);
    }
  }
  let _0xeb0341 = Date.now();
  r = "c4491f13dce9c71f".concat(_0x19a87d).concat(_0xeb0341);
  let _0x4a5f46 = _0xf1196c.MD5(r).toString();
  _0x65fb16.timestamp = _0xeb0341;
  _0x65fb16.sign = _0x4a5f46;
  _0x65fb16.signKey = "c4491f13dce9c71f";
  return _0x65fb16;
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@");
        const n = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e);
        const o = this.getval(i);
        const h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : undefined;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"];
            let s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl;
            let s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime();
      const s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}