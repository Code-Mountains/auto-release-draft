import * as core from '@actions/core'
import * as github from '@actions/github'

export function getCreatedTag(): string | null {
  const eventName = github.context.eventName
  const payload = github.context.payload

  if (eventName === 'create' && payload.ref_type === 'tag') {
    // Handle 'create' event for a tag
    return payload.ref
  } else if (eventName === 'push' && payload.ref.startsWith('refs/tags/')) {
    // Handle 'push' event for a tag
    return payload.ref.split('refs/tags/')[1]
  } else {
    // Log the event if it's not a tag 'create' or 'push' event
    core.info(
      `The event name was ${eventName}, which is not handled by this action.`
    )
    return null
  }
}
