import axios from 'axios'
import { createStore } from 'vuex'



export default createStore({
  state: {
    products: null,
  
  },

  mutations: {
    addProducts(state, value){
      state.products = value
    } 
  },
  actions: {
    async getProducts({commit}){
      try {
        
        const response = await (await axios.get('https://keirakistensamy.github.io/json/data/')).data
        console.log(response);
        commit('addProducts', response.products)
      } catch (error) {
        console.log("couldn't fetch");
        
      }

    }
  },

})
