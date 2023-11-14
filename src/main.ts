import * as core from '@actions/core'
import * as github from './github'
import * as event from './event'
import * as version from './version'
import * as git from './git'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    let releaseUrl = ''

    const token = core.getInput('repo-token')

    const tag = event.getCreatedTag()

    if (tag && version.isSemVer(tag)) {
      const changelog = await git.getChangesIntroducedByTag(tag)

      core.debug(`Detected changelog:\n${changelog}`)

      releaseUrl = await github.createReleaseDraft(tag, token, changelog)
    }

    core.setOutput('release-url', releaseUrl)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
