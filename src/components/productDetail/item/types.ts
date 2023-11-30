export type counterState = {
    count: number
}

export type actionType = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' }