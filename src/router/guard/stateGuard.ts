import type { Router } from 'vue-router';
import { useAppStore } from '/@/stores/modules/app';
// import { useMultipleTabStore } from '/@/stores/modules/multipleTab'; // TODO: delete for hood tabs
import { useUserStore } from '/@/stores/modules/user';
import { usePermissionStore } from '/@/stores/modules/permission';
import { PageEnum } from '/@/enums/pageEnum';
import { removeTabChangeListener } from '/@/logics/mitt/routeChange';

export function createStateGuard(router: Router) {
  router.afterEach((to) => {
    // Just enter the login page and clear the authentication information
    if (to.path === PageEnum.BASE_LOGIN) {
      // const tabStore = useMultipleTabStore(); // TODO: delete for hood tabs
      const userStore = useUserStore();
      const appStore = useAppStore();
      const permissionStore = usePermissionStore();
      appStore.resetAllState();
      permissionStore.resetState();
      // tabStore.resetState(); // TODO: delete
      userStore.resetState();
      removeTabChangeListener();
    }
  });
}
