import type {
  Router
} from 'vue-router';



interface StrategicPattern {
  /** The condition */
  condition: boolean;
  /** If the condition is true, then call the action function */
  callback: () => void;
}


const createRouteGuard = (router: Router) => {
  const isLoggedIn = true

  router.beforeEach(async (to, from, next) => {

    const routeSwitches : StrategicPattern[] = [
      // if ..., then switch to...
      {
        condition: (from.meta.requiresConfirm),
        callback: () => {
          if (confirm('資料將消失，確定要離開？')) {
            next(); 
          } else {
            next(false); 
          }
        }
      },
      {
        condition: (to.meta.requiresAuth && !isLoggedIn),
        callback: () => {
          next({ path: '/' })
        }
      },
      {
        condition: (to.meta.requiresAuth && isLoggedIn),
        callback: () => {
          next()
        }
      },
      
      {
        condition: (!to.meta.requiresAuth),
        callback: () => {
          next()
        }
      },
    ]
      
    routeSwitches.some(({ condition, callback }) => {
      if (condition) {
        callback();
      }
      return condition;
    });
  })
}

/**
 * Router guard
 *
 * @param router - Router instance
 */
export function createRouterGuard(router: Router) {
  createRouteGuard(router);
}