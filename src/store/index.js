import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: []
    },
    getters: {
        cartList(state) {
            return state.cartList.length
        },
    },
    mutations: {
        addCounter(state, payload) {
            payload.count++
        },
        addToCart(state, payload) {
            payload.checked = true
            state.cartList.push(payload)
        }

    },
    actions: {
        addCart(context, payload) {
            // let oldproduct = null
            // for (let item of state.cartlist) {
            //     if (item.iid === payload.iid) {
            //         oldproduct = item
            //     }
            // }
            return new Promise((resolve) => {
                    let product = context.state.cartList.find(item => item.iid === payload.iid)
                    if (product) {
                        // product.count+=1
                        context.commit('addCounter', product)
                        resolve('当前商品+1')
                    } else {
                        payload.count = 1
                            // context.state.cartlist.push(payload)
                        context.commit('addToCart', payload)
                        resolve('添加商品成功')
                    }
                })
                // console.log(context.state.cartlist);
        }
    },
    modules: {

    }
})