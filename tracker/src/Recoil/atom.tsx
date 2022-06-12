import { atom } from 'recoil'
import { Tracks, LocationState, UserAuth } from '../type/TypeLibrary'


export const userAuth = atom ({
  key: "auth",
  default:{
      token : "",
      errorMessage: "",
  } as UserAuth
})

export const locationState = atom ({
  key: 'locationState',
  default: {
      recording: false,
      locations: [],
      currentLocation: null,
      name: "",
  } as LocationState
})

export const tracks = atom ({
  key: "track",
  default: [{
      __v: 0,
      _id: "",
      locations: [],
      name: "",
      userId: "",
  }] as Tracks[]
})
