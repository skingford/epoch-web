import { createVersionPolling } from "version-polling";


export function setupVersionPolling() {
  createVersionPolling({
    vcType: "chunkHash",
    chunkName: "index",
    silent: false,
    onUpdate: (self) => {
      const result = confirm("页面有更新，点击确定刷新页面！");
      if (result) {
        self.onRefresh();
      } else {
        self.onCancel();
      }
    },
  });
}


