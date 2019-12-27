// components/menu/menu.js 添加了菜单点击事件和对应的功能显示
Component({
  /**
   * 缁勪欢鐨勫睘鎬у垪琛�   */
  properties: {
    mainmodel: {
      type: Object,
      value: {}
    },
    menulist: {
      type: Object,
      value: []
    }
  },

  /**
   * 缁勪欢鐨勫垵濮嬫暟鎹�   */
  data: {
    showmenus:true,
  },

  /**
   * 缁勪欢鐨勬柟娉曞垪琛�   */
  methods: {
    showclick:function(){
      //console.log("showclick")
      let isshow = !this.data.showmenus;
      //console.log(isshow)
      this.setData({
        showmenus: isshow,
      })
    },
    itemclick:function(e){
      this.showclick();
      //console.log(e.currentTarget.dataset);
      let info = e.currentTarget.dataset.item;
      if (info){
        this.triggerEvent('menuItemClick', {
            "iteminfo":info
        })
      }
    }
   

  }
})
