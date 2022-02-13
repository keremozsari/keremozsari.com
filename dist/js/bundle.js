const navbar=document.querySelector("header");function animation(){var o=new ScrollMagic.Controller;const e=gsap.timeline({defaults:{ease:Expo.InOut}});e.fromTo(".homepage__left",1.5,{y:"-600rem"},{y:0},"-=1"),e.fromTo(".homepage__desc",1,{y:"100rem",opacity:0},{y:0,opacity:1},"-=1"),e.fromTo(".homepage__right",1.3,{y:"-100rem"},{y:0},"-=1"),e.fromTo(navbar,1,{y:"-10rem"},{y:0}),e.fromTo(".header__item",1.3,{x:"100rem"},{x:0,stagger:.2});const t=gsap.timeline({defaults:{ease:Expo.InOut}});t.fromTo("#about",1.2,{x:"-2rem",opacity:0},{x:0,opacity:1}),t.fromTo(".about",.5,{x:"5rem",opacity:0},{x:0,opacity:1}),t.fromTo(".about__content__text",.5,{y:"1rem",opacity:0},{x:0,opacity:1,stagger:.2}),new ScrollMagic.Scene({triggerElement:"#about",triggerHook:.5,reverse:!1}).setTween(t).addTo(o);const r=gsap.timeline({defaults:{ease:Expo.InOut}});r.fromTo("#skills",.5,{x:"-2rem",opacity:0},{x:0,opacity:1}),r.fromTo(".skills",.6,{opacity:0},{opacity:1}),r.fromTo(".skills__card",1,{y:"-3rem",opacity:0},{y:0,opacity:1,stagger:.2}),r.set(".skills__card",{clearProps:"all"}),new ScrollMagic.Scene({triggerElement:"#skills",triggerHook:.5,reverse:!1}).setTween(r).addTo(o);const a=gsap.timeline({defaults:{ease:Expo.InOut}});a.fromTo("#portfolio",.5,{x:"-2rem",opacity:0},{x:0,opacity:1}),a.fromTo(".portfolio__card",.7,{x:"100rem",display:"none",rotationX:180,opacity:0},{x:0,display:"block",rotationX:0,opacity:"1",stagger:.2}),a.fromTo(".portfolio__more",.7,{y:"100",opacity:0},{y:0,opacity:"1"}),a.set(".portfolio",{clearProps:"all"}),new ScrollMagic.Scene({triggerElement:"#portfolio",triggerHook:.5,reverse:!1}).setTween(a).addTo(o)}animation();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJuYXZiYXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhbmltYXRpb24iLCJjb250cm9sbGVyIiwiU2Nyb2xsTWFnaWMiLCJDb250cm9sbGVyIiwidDEiLCJnc2FwIiwidGltZWxpbmUiLCJkZWZhdWx0cyIsImVhc2UiLCJFeHBvIiwiSW5PdXQiLCJmcm9tVG8iLCJ5Iiwib3BhY2l0eSIsIngiLCJzdGFnZ2VyIiwidDIiLCJTY2VuZSIsInRyaWdnZXJFbGVtZW50IiwidHJpZ2dlckhvb2siLCJyZXZlcnNlIiwic2V0VHdlZW4iLCJhZGRUbyIsInQzIiwic2V0IiwiY2xlYXJQcm9wcyIsInQ0IiwiZGlzcGxheSIsInJvdGF0aW9uWCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsT0FBU0MsU0FBU0MsY0FBYyxVQUV0QyxTQUFTQyxZQUNMLElBQUlDLEVBQWEsSUFBSUMsWUFBWUMsV0FFakMsTUFBTUMsRUFBS0MsS0FBS0MsU0FBUyxDQUFFQyxTQUFVLENBQUVDLEtBQU1DLEtBQUtDLFNBRWxETixFQUFHTyxPQUFPLGtCQUFtQixJQUFLLENBQUVDLEVBQUcsV0FBWSxDQUFFQSxFQUFHLEdBQUssT0FDN0RSLEVBQUdPLE9BQU8sa0JBQW1CLEVBQUcsQ0FBRUMsRUFBRyxTQUFVQyxRQUFTLEdBQUssQ0FBRUQsRUFBRyxFQUFHQyxRQUFTLEdBQUssT0FDbkZULEVBQUdPLE9BQU8sbUJBQW9CLElBQUssQ0FBRUMsRUFBRyxXQUFZLENBQUVBLEVBQUcsR0FBSyxPQUM5RFIsRUFBR08sT0FBT2QsT0FBUSxFQUFHLENBQUVlLEVBQUcsVUFBWSxDQUFFQSxFQUFHLElBQzNDUixFQUFHTyxPQUFPLGdCQUFpQixJQUFLLENBQUVHLEVBQUcsVUFBWSxDQUFFQSxFQUFHLEVBQUdDLFFBQVMsS0FHbEUsTUFBTUMsRUFBS1gsS0FBS0MsU0FBUyxDQUFFQyxTQUFVLENBQUVDLEtBQU1DLEtBQUtDLFNBRWxETSxFQUFHTCxPQUFPLFNBQVUsSUFBSyxDQUFFRyxFQUFHLFFBQVNELFFBQVMsR0FBSyxDQUFFQyxFQUFHLEVBQUdELFFBQVMsSUFDdEVHLEVBQUdMLE9BQU8sU0FBVSxHQUFLLENBQUVHLEVBQUcsT0FBUUQsUUFBUyxHQUFLLENBQUVDLEVBQUcsRUFBR0QsUUFBUyxJQUNyRUcsRUFBR0wsT0FBTyx3QkFBeUIsR0FBSyxDQUFFQyxFQUFHLE9BQVFDLFFBQVMsR0FBSyxDQUFFQyxFQUFHLEVBQUdELFFBQVMsRUFBR0UsUUFBUyxLQUVoRyxJQUFJYixZQUFZZSxNQUFNLENBQ2xCQyxlQUFnQixTQUNoQkMsWUFBYSxHQUNiQyxTQUFTLElBRVJDLFNBQVNMLEdBQ1RNLE1BQU1yQixHQUlYLE1BQU1zQixFQUFLbEIsS0FBS0MsU0FBUyxDQUFFQyxTQUFVLENBQUVDLEtBQU1DLEtBQUtDLFNBQ2xEYSxFQUFHWixPQUFPLFVBQVcsR0FBSSxDQUFFRyxFQUFHLFFBQVNELFFBQVMsR0FBSyxDQUFFQyxFQUFHLEVBQUdELFFBQVMsSUFDdEVVLEVBQUdaLE9BQU8sVUFBVyxHQUFJLENBQUVFLFFBQVMsR0FBSyxDQUFFQSxRQUFTLElBQ3BEVSxFQUFHWixPQUFPLGdCQUFpQixFQUFHLENBQUVDLEVBQUcsUUFBU0MsUUFBUyxHQUFLLENBQUVELEVBQUcsRUFBR0MsUUFBUyxFQUFHRSxRQUFTLEtBQ3ZGUSxFQUFHQyxJQUFJLGdCQUFpQixDQUFFQyxXQUFZLFFBRXRDLElBQUl2QixZQUFZZSxNQUFNLENBQ2xCQyxlQUFnQixVQUNoQkMsWUFBYSxHQUNiQyxTQUFTLElBRVJDLFNBQVNFLEdBQ1RELE1BQU1yQixHQUlYLE1BQU15QixFQUFLckIsS0FBS0MsU0FBUyxDQUFFQyxTQUFVLENBQUVDLEtBQU1DLEtBQUtDLFNBQ2xEZ0IsRUFBR2YsT0FBTyxhQUFjLEdBQUksQ0FBRUcsRUFBRyxRQUFTRCxRQUFTLEdBQUssQ0FBRUMsRUFBRyxFQUFHRCxRQUFTLElBQ3pFYSxFQUFHZixPQUFPLG1CQUFvQixHQUFLLENBQUVHLEVBQUUsU0FBVWEsUUFBUyxPQUFTQyxVQUFXLElBQUtmLFFBQVMsR0FBSyxDQUFFQyxFQUFHLEVBQUdhLFFBQVMsUUFBU0MsVUFBVyxFQUFHZixRQUFTLElBQU1FLFFBQVMsS0FDaktXLEVBQUdmLE9BQU8sbUJBQW9CLEdBQUssQ0FBR0MsRUFBRSxNQUFPQyxRQUFTLEdBQUssQ0FBRUQsRUFBRSxFQUFHQyxRQUFRLE1BQzVFYSxFQUFHRixJQUFJLGFBQWMsQ0FBRUMsV0FBWSxRQUVuQyxJQUFJdkIsWUFBWWUsTUFBTSxDQUNsQkMsZUFBZ0IsYUFDaEJDLFlBQWEsR0FDYkMsU0FBUyxJQUVSQyxTQUFTSyxHQUNUSixNQUFNckIsR0FFZkQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcblxuZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xuICAgIHZhciBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcblxuICAgIGNvbnN0IHQxID0gZ3NhcC50aW1lbGluZSh7IGRlZmF1bHRzOiB7IGVhc2U6IEV4cG8uSW5PdXQgfSB9KTtcblxuICAgIHQxLmZyb21UbyhcIi5ob21lcGFnZV9fbGVmdFwiLCAxLjUsIHsgeTogXCItNjAwcmVtXCJ9LCB7IHk6IDAgfSwgXCItPTFcIik7XG4gICAgdDEuZnJvbVRvKFwiLmhvbWVwYWdlX19kZXNjXCIsIDEsIHsgeTogXCIxMDByZW1cIiwgb3BhY2l0eTogMCB9LCB7IHk6IDAsIG9wYWNpdHk6IDEgfSwgXCItPTFcIik7XG4gICAgdDEuZnJvbVRvKFwiLmhvbWVwYWdlX19yaWdodFwiLCAxLjMsIHsgeTogXCItMTAwcmVtXCJ9LCB7IHk6IDAgfSwgXCItPTFcIik7XG4gICAgdDEuZnJvbVRvKG5hdmJhciwgMSwgeyB5OiBcIi0xMHJlbVwiIH0sIHsgeTogMCB9KTtcbiAgICB0MS5mcm9tVG8oXCIuaGVhZGVyX19pdGVtXCIsIDEuMywgeyB4OiBcIjEwMHJlbVwiIH0sIHsgeDogMCwgc3RhZ2dlcjogMC4yIH0pO1xuXG5cbiAgICBjb25zdCB0MiA9IGdzYXAudGltZWxpbmUoeyBkZWZhdWx0czogeyBlYXNlOiBFeHBvLkluT3V0IH0gfSk7XG5cbiAgICB0Mi5mcm9tVG8oXCIjYWJvdXRcIiwgMS4yLCB7IHg6IFwiLTJyZW1cIiwgb3BhY2l0eTogMCB9LCB7IHg6IDAsIG9wYWNpdHk6IDEgfSk7XG4gICAgdDIuZnJvbVRvKFwiLmFib3V0XCIsIDAuNSwgeyB4OiBcIjVyZW1cIiwgb3BhY2l0eTogMCB9LCB7IHg6IDAsIG9wYWNpdHk6IDEgfSk7XG4gICAgdDIuZnJvbVRvKFwiLmFib3V0X19jb250ZW50X190ZXh0XCIsIDAuNSwgeyB5OiBcIjFyZW1cIiwgb3BhY2l0eTogMCB9LCB7IHg6IDAsIG9wYWNpdHk6IDEsIHN0YWdnZXI6IDAuMiB9KTtcblxuICAgIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgICAgIHRyaWdnZXJFbGVtZW50OiBcIiNhYm91dFwiLFxuICAgICAgICB0cmlnZ2VySG9vazogMC41LFxuICAgICAgICByZXZlcnNlOiBmYWxzZSxcbiAgICB9KVxuICAgICAgICAuc2V0VHdlZW4odDIpXG4gICAgICAgIC5hZGRUbyhjb250cm9sbGVyKTtcblxuICAgIC8vU2tpbGxzIGFuaW1hdGlvblxuXG4gICAgY29uc3QgdDMgPSBnc2FwLnRpbWVsaW5lKHsgZGVmYXVsdHM6IHsgZWFzZTogRXhwby5Jbk91dCB9IH0pO1xuICAgIHQzLmZyb21UbyhcIiNza2lsbHNcIiwgLjUsIHsgeDogXCItMnJlbVwiLCBvcGFjaXR5OiAwIH0sIHsgeDogMCwgb3BhY2l0eTogMSB9KTtcbiAgICB0My5mcm9tVG8oXCIuc2tpbGxzXCIsIC42LCB7IG9wYWNpdHk6IDAgfSwgeyBvcGFjaXR5OiAxIH0pO1xuICAgIHQzLmZyb21UbyhcIi5za2lsbHNfX2NhcmRcIiwgMSwgeyB5OiBcIi0zcmVtXCIsIG9wYWNpdHk6IDAgfSwgeyB5OiAwLCBvcGFjaXR5OiAxLCBzdGFnZ2VyOiAwLjIgfSk7XG4gICAgdDMuc2V0KFwiLnNraWxsc19fY2FyZFwiLCB7IGNsZWFyUHJvcHM6IFwiYWxsXCIgfSk7XG5cbiAgICBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xuICAgICAgICB0cmlnZ2VyRWxlbWVudDogXCIjc2tpbGxzXCIsXG4gICAgICAgIHRyaWdnZXJIb29rOiAwLjUsXG4gICAgICAgIHJldmVyc2U6IGZhbHNlLFxuICAgIH0pXG4gICAgICAgIC5zZXRUd2Vlbih0MylcbiAgICAgICAgLmFkZFRvKGNvbnRyb2xsZXIpO1xuXG4gICAgLy8gUG9ydGZvbGlvIGFuaW1hdGlvbnNcblxuICAgIGNvbnN0IHQ0ID0gZ3NhcC50aW1lbGluZSh7IGRlZmF1bHRzOiB7IGVhc2U6IEV4cG8uSW5PdXQgfSB9KTtcbiAgICB0NC5mcm9tVG8oXCIjcG9ydGZvbGlvXCIsIC41LCB7IHg6IFwiLTJyZW1cIiwgb3BhY2l0eTogMCB9LCB7IHg6IDAsIG9wYWNpdHk6IDEgfSk7XG4gICAgdDQuZnJvbVRvKFwiLnBvcnRmb2xpb19fY2FyZFwiLCAwLjcsIHsgeDpcIjEwMHJlbVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgIHJvdGF0aW9uWDogMTgwLCBvcGFjaXR5OiAwIH0sIHsgeDogMCwgZGlzcGxheTogXCJibG9ja1wiLCByb3RhdGlvblg6IDAsIG9wYWNpdHk6IFwiMVwiICwgc3RhZ2dlcjogMC4yfSk7XG4gICAgdDQuZnJvbVRvKFwiLnBvcnRmb2xpb19fbW9yZVwiLCAwLjcsIHsgIHk6XCIxMDBcIiwgb3BhY2l0eTogMCB9LCB7IHk6MCwgb3BhY2l0eTpcIjFcIiB9KTtcbiAgICB0NC5zZXQoXCIucG9ydGZvbGlvXCIsIHsgY2xlYXJQcm9wczogXCJhbGxcIiB9KTtcblxuICAgIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgICAgIHRyaWdnZXJFbGVtZW50OiBcIiNwb3J0Zm9saW9cIixcbiAgICAgICAgdHJpZ2dlckhvb2s6IDAuNSxcbiAgICAgICAgcmV2ZXJzZTogZmFsc2UsXG4gICAgfSlcbiAgICAgICAgLnNldFR3ZWVuKHQ0KVxuICAgICAgICAuYWRkVG8oY29udHJvbGxlcik7XG59XG5hbmltYXRpb24oKTsiXX0=
