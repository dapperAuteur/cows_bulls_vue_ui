import Vue from 'vue'
import Buefy from 'buefy'
import Router from 'vue-router'
import Game from '@/components/Game'
import HelloWorld from '@/components/HelloWorld'
import Letters from '@/components/Letters'
import Library from '@/components/Library'
import Player from '@/components/Player'
import PlayerProfile from '@/components/PlayerProfile'
import Players from '@/components/Players'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Word from '@/components/Word'

Vue.use(Router)
Vue.use(Buefy)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/letters',
      name: 'Letters',
      component: Letters
    },
    {
      path: '/library',
      name: 'Library',
      component: Library
    },
    {
      path: '/players/:id',
      name: 'Player',
      component: PlayerProfile
    },
    {
      path: '/players',
      name: 'Players',
      component: Players
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/word',
      name: 'Word',
      component: Word
    }
  ]
})
