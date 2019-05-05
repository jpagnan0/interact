import axios from 'axios';

import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTH_ERROR
} from "../constants/actionTypes";

const API = `https://interact-io.herokuapp.com/api/v1`;
