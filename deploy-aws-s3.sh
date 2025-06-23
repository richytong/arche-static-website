#!/usr/bin/env node

const AwsCredentials = require('presidium/AwsCredentials')
const S3Bucket = require('presidium/S3Bucket')
const path = require('path')
const findPaths = require('./lib/findPaths')
const validateConfig = require('./lib/validateConfig')
const config = require('./config')

validateConfig(config)

const { domain, pagesDir } = config

/**
 * @name main
 *
 * @synopsis
 * ```coffeescript [specscript]
 * main() -> Promise<>
 * ```
 */
async function main() {
  const awsCreds = await AwsCredentials(process.env.AWS_PROFILE ?? 'default')

  const bucket = new S3Bucket({
    name: domain,
    ...awsCreds,
  })
  await bucket.ready

  const dir = path.join(__dirname, pagesDir)
  const paths = await findPaths(dir)

  for (const path of paths) {
    const key = path.replace(`${dir}/`, '')
    console.log(key)
    // await bucket.upload()
  }
}

main()
