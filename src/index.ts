/**
 * @macchiatojs/wrap-koa-compose
 *
 * Copyright(c) 2021 Imed Jaberi
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 */

import koaCompose from 'koa-compose'

/**
 * wrap the koa-compose module to be with same used behaviour like `koaify-middleware`.
 *
 * @param {function} koaCompose
 * @api public
 */
class WrapKoaCompose<Context, Next> extends Array {
  #koaCompose

  constructor() {
    super()
    this.#koaCompose = koaCompose
  }

  compose(ctx: Context, next?: Next) {
    return this.#koaCompose(this)(ctx, next)
  }
}

/**
 * Expose `WrapKoaCompose`.
 */

export default WrapKoaCompose
