import React from 'react'
import { Route, Text, Reply } from '@botonic/react'
import Welcome from './actions/Welcome'
import HaveAQuestion from './actions/HaveAQuestion'
import PlaceAnOrder from './actions/PlaceAnOrder'
import VegOrNonVeg from './actions/VegOrNonVeg'
import OrderDone from './actions/OrderDone'
import ContactDelivery from './actions/ContactDelivery'
import ContactManager from './actions/ContactManager'


const vegOrNonVegRoutes: Route[] = [
  {
    path: 'order-done',
    payload: 'veg',
    action: OrderDone,
  },
  {
    path: 'order-done',
    payload: 'nonveg',
    action: OrderDone,
  },
]

export const routes: Route[] = [
  {
    path: 'initial',
    text: /hi/i,
    action: Welcome,

    childRoutes: [
      {
        path: 'have-a-question',
        text: /question/gi,
        payload: 'question',
        action: HaveAQuestion,
      },
      {
        path: 'place-an-order',
        payload: 'order',
        action: PlaceAnOrder,

        childRoutes: [
          {
            path: 'veg-or-nonveg',
            payload: 'hamburger',
            action: VegOrNonVeg,

            childRoutes: vegOrNonVegRoutes,
          },
          {
            path: 'veg-or-nonveg',
            payload: 'pizza',
            action: VegOrNonVeg,

            childRoutes: vegOrNonVegRoutes,
          },
          {
            path: 'veg-or-nonveg',
            payload: 'sandwich',
            action: VegOrNonVeg,

            childRoutes: vegOrNonVegRoutes,
          },
          {
            path: 'veg-or-nonveg',
            payload: 'taco',
            action: VegOrNonVeg,

            childRoutes: vegOrNonVegRoutes,
          },
          {
            path: 'veg-or-nonveg',
            payload: 'burrito',
            action: VegOrNonVeg,

            childRoutes: vegOrNonVegRoutes,
          },
        ]
      },
    ]
  },  
  {
    path: 'contact-manager',
    text: /(contact)*(manager)/gi,
    payload: 'contactManager',
    action: ContactManager,
  },
  {
    path: 'contact-delivery',
    payload: 'contactDelivery',
    text: /((contact)*(delivery)|(where is my order|track my order))/gi,
    action: ContactDelivery,
  },
  {
    path: 'go-to-main-menu',
    text: /main menu/gi,
    payload: 'mainMenu',
    redirect: 'initial'
  },
  {
    path: 'go-to-food-menu',
    text: /(what|what's)*(food)?(menu)/gi,
    payload: 'foodMenu',
    redirect: 'place-an-order',
  },
  {
    path: 'place-an-order',
    payload: 'order',
    text: /(make|place)?(an)?(order)/gi,
    action: PlaceAnOrder,

    childRoutes: [
      {
        path: 'veg-or-nonveg',
        payload: 'hamburger',
        action: VegOrNonVeg,

        childRoutes: vegOrNonVegRoutes,
      },
      {
        path: 'veg-or-nonveg',
        payload: 'pizza',
        action: VegOrNonVeg,

        childRoutes: vegOrNonVegRoutes,
      },
      {
        path: 'veg-or-nonveg',
        payload: 'sandwich',
        action: VegOrNonVeg,

        childRoutes: vegOrNonVegRoutes,
      },
      {
        path: 'veg-or-nonveg',
        payload: 'taco',
        action: VegOrNonVeg,

        childRoutes: vegOrNonVegRoutes,
      },
      {
        path: 'veg-or-nonveg',
        payload: 'burrito',
        action: VegOrNonVeg,

        childRoutes: vegOrNonVegRoutes,
      },
    ]
  },
]