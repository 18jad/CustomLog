class CustomLog {
  constructor(setting, colors, newRun) {
    this.setting = "";
    this.newRun = newRun;
  }
  static log(m, setting = this.setting) {
    console.log(`%c${m}`, setting);
  }
  static init() {
    localStorage.setItem("newRun", false);
    this.setting === undefined ? (this.setting = "") : null;
  }

  static setCustom(custom, value) {
    this.init();
    this.setting += (`${custom}: ` + value + "; ").toString();
  }

  static reset() {
    this.setting = "";
  }

  static specialCustom(value) {
    switch (value) {
      case "rainbow":
        this.log = (m, setting = this.setting) => {
          let c = "";
          let rain = "";
          let p = 0;
          const colors = [
            "color: red",
            "color: blue",
            "color: yellow",
            "color: green",
            "color: purple",
            "color: pink",
            "color: orange",
            "color: cyan",
            "color: lime",
            "color: white",
            "color: brown",
          ];
          let fun = `console.log(c, `;
          for (let i = 0; i < m.length; ++i) {
            c += "%c";
            c += m[i];
            fun += `"${colors[p]}; ${setting}", `;
            p++;
            if (p == colors.length) p = 0;
          }
          fun = fun.slice(0, -2);
          fun += ")";
          eval(fun);
        };
        break;
      default:
        break;
    }
  }
}

const log = (m, s) => {
  CustomLog.log(m, s);
};

const welcomeMessage = () => {
  CustomLog.setCustom("font-weight", "bold");
  CustomLog.setCustom("font-size", "50px");
  CustomLog.setCustom("color", "lightblue");
  CustomLog.setCustom(
    "text-shadow",
    "3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)",
  );
  log("Welcome to CustomLog!❤️");
  CustomLog.reset();
};

const runOnce = () => {
  localStorage.getItem("newRun") ? null : welcomeMessage();
};

runOnce();

CustomLog.specialCustom("rainbow");

log("hello world");
