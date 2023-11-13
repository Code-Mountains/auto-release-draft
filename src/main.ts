import * as core from '@actions/core'
import * as event from './event'
import * as version from './version'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const tag = event.getCreatedTag() 

    if (tag && version.isSemVer(tag)) {

    }

    core.setOutput('release-url','https://fruitfall.thecodemountains.com')   

  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()