const _0x498506 = _0x15c3;
(function (_0x33508a, _0x32cdbc) {
  const _0xac3a46 = _0x15c3,
    _0x3942d6 = _0x33508a();
  while (!![]) {
    try {
      const _0x290291 =
        (-parseInt(_0xac3a46(0xf3)) / 0x1) * (parseInt(_0xac3a46(0xd7)) / 0x2) +
        (parseInt(_0xac3a46(0xe0)) / 0x3) * (-parseInt(_0xac3a46(0xdd)) / 0x4) +
        (-parseInt(_0xac3a46(0xf6)) / 0x5) * (parseInt(_0xac3a46(0xf1)) / 0x6) +
        (parseInt(_0xac3a46(0xdf)) / 0x7) * (-parseInt(_0xac3a46(0xda)) / 0x8) +
        (-parseInt(_0xac3a46(0xfc)) / 0x9) *
          (-parseInt(_0xac3a46(0xf4)) / 0xa) +
        parseInt(_0xac3a46(0xfd)) / 0xb +
        parseInt(_0xac3a46(0xf5)) / 0xc;
      if (_0x290291 === _0x32cdbc) break;
      else _0x3942d6["push"](_0x3942d6["shift"]());
    } catch (_0x31c672) {
      _0x3942d6["push"](_0x3942d6["shift"]());
    }
  }
})(_0x3e51, 0xf30f8);
class CustomLog {
  constructor(_0x19e228, _0x1f164c, _0x24b239) {
    const _0x1bd2a8 = _0x15c3;
    (this[_0x1bd2a8(0xee)] = ""), (this[_0x1bd2a8(0xf7)] = _0x24b239);
  }
  static ["log"](_0x5d8558, _0x17b2a7 = this[_0x498506(0xee)]) {
    const _0xd979af = _0x498506;
    console[_0xd979af(0xf9)]("%c" + _0x5d8558, _0x17b2a7);
  }
  static [_0x498506(0xd9)]() {
    const _0x2f8212 = _0x498506;
    localStorage[_0x2f8212(0xe4)]("newRun", ![]),
      this[_0x2f8212(0xee)] === undefined ? (this[_0x2f8212(0xee)] = "") : null;
  }
  static [_0x498506(0xeb)](_0x47e97a, _0x3a5233) {
    const _0x5b1206 = _0x498506;
    this[_0x5b1206(0xd9)](),
      (this[_0x5b1206(0xee)] += (_0x47e97a + ":\x20" + _0x3a5233 + ";\x20")[
        _0x5b1206(0xf8)
      ]());
  }
  static ["reset"]() {
    this["setting"] = "";
  }
  static [_0x498506(0xd6)](_0x4e0056) {
    const _0x5f232d = _0x498506;
    switch (_0x4e0056) {
      case "rainbow":
        this[_0x5f232d(0xf9)] = (
          _0x43e974,
          _0x3d0a62 = this[_0x5f232d(0xee)],
        ) => {
          const _0x2bd9d5 = _0x5f232d;
          let _0x1a71ef = "",
            _0x5a42a4 = "",
            _0x33a9a6 = 0x0;
          const _0x5277fd = [
            _0x2bd9d5(0xea),
            _0x2bd9d5(0xd8),
            _0x2bd9d5(0xdc),
            _0x2bd9d5(0xdb),
            _0x2bd9d5(0xe3),
            _0x2bd9d5(0xe6),
            _0x2bd9d5(0xfa),
            _0x2bd9d5(0xef),
            _0x2bd9d5(0xe8),
            _0x2bd9d5(0xde),
            "color:\x20brown",
          ];
          let _0x37ff92 = _0x2bd9d5(0xfb);
          for (
            let _0x7dbabc = 0x0;
            _0x7dbabc < _0x43e974["length"];
            ++_0x7dbabc
          ) {
            (_0x1a71ef += "%c"),
              (_0x1a71ef += _0x43e974[_0x7dbabc]),
              (_0x37ff92 +=
                "\x22" +
                _0x5277fd[_0x33a9a6] +
                ";\x20" +
                _0x3d0a62 +
                _0x2bd9d5(0xe2)),
              _0x33a9a6++;
            if (_0x33a9a6 == _0x5277fd[_0x2bd9d5(0xf2)]) _0x33a9a6 = 0x0;
          }
          (_0x37ff92 = _0x37ff92["slice"](0x0, -0x2)),
            (_0x37ff92 += ")"),
            eval(_0x37ff92);
        };
        break;
      default:
        break;
    }
  }
}
const log = (_0x596063, _0x64af9f) => {
    const _0x5b89d1 = _0x498506;
    CustomLog[_0x5b89d1(0xf9)](_0x596063, _0x64af9f);
  },
  welcomeMessage = () => {
    const _0x1e66cf = _0x498506;
    CustomLog[_0x1e66cf(0xeb)](_0x1e66cf(0xed), "bold"),
      CustomLog[_0x1e66cf(0xeb)](_0x1e66cf(0xec), _0x1e66cf(0xe7)),
      CustomLog[_0x1e66cf(0xeb)]("color", _0x1e66cf(0xe5)),
      CustomLog[_0x1e66cf(0xeb)](_0x1e66cf(0xe1), _0x1e66cf(0xf0)),
      log("Welcome\x20to\x20CustomLog!❤️"),
      CustomLog[_0x1e66cf(0xfe)]();
  },
  runOnce = () => {
    const _0x8954af = _0x498506;
    localStorage[_0x8954af(0xe9)](_0x8954af(0xf7)) ? null : welcomeMessage();
  };
function _0x15c3(_0x5801d9, _0x5c645e) {
  const _0x3e5176 = _0x3e51();
  return (
    (_0x15c3 = function (_0x15c379, _0x939643) {
      _0x15c379 = _0x15c379 - 0xd6;
      let _0x5e5edc = _0x3e5176[_0x15c379];
      return _0x5e5edc;
    }),
    _0x15c3(_0x5801d9, _0x5c645e)
  );
}
runOnce();
function _0x3e51() {
  const _0x33d7f7 = [
    "toString",
    "log",
    "color:\x20orange",
    "console.log(c,\x20",
    "17163eItfwK",
    "17141608GYfTSA",
    "reset",
    "specialCustom",
    "2NvXFCo",
    "color:\x20blue",
    "init",
    "5336imsmqH",
    "color:\x20green",
    "color:\x20yellow",
    "68968TcqPhy",
    "color:\x20white",
    "1379WXeNPT",
    "192XLioVN",
    "text-shadow",
    "\x22,\x20",
    "color:\x20purple",
    "setItem",
    "lightblue",
    "color:\x20pink",
    "50px",
    "color:\x20lime",
    "getItem",
    "color:\x20red",
    "setCustom",
    "font-size",
    "font-weight",
    "setting",
    "color:\x20cyan",
    "3px\x203px\x200\x20rgb(217,31,38)\x20,\x206px\x206px\x200\x20rgb(226,91,14)\x20,\x209px\x209px\x200\x20rgb(245,221,8)\x20,\x2012px\x2012px\x200\x20rgb(5,148,68)\x20,\x2015px\x2015px\x200\x20rgb(2,135,206)\x20,\x2018px\x2018px\x200\x20rgb(4,77,145)\x20,\x2021px\x2021px\x200\x20rgb(42,21,113)",
    "1930866ahmZmn",
    "length",
    "17233deJKPk",
    "7900ouLzmG",
    "5640984OBNrLK",
    "20GzQkiZ",
    "newRun",
  ];
  _0x3e51 = function () {
    return _0x33d7f7;
  };
  return _0x3e51();
}
