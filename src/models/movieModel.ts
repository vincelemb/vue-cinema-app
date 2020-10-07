// Validation rules
import {
    boolean,
    equal,
    integer,
    min,
    required,
    string,
  } from 'vue-mc/validation';
import { Index } from './index';
  
  export class MovieModel extends Index {
    // Default attributes that define the "empty" state.
    defaults() {
      return {
        id: null,
        title: "test",
        description: "test2",
      }
    }
  
    // Attribute mutations.
    mutation() {
      return {
        id:   (id: number) => Number(id) || null,
        title: String,
        description: String,
      }
    }
  
    // Attribute validation
    validation() {
      return {
        id:   integer.and(min(1)).or(equal(null)),
        title: string.and(required),
        description: string.and(required),
      }
    }
  
    // Route configuration
    // routes() {
    //   return {
    //     save:  Common.getApiUrl('candidates'),
    //     delete:  Common.getApiUrl('candidates/{id}'),
    //     update:  Common.getApiUrl('candidates/{id}'),
    //   }
    // }
  }
  