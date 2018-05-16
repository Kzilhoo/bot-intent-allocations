import test from 'ava'
import { logic } from '../src/logic'
import { allocations }  from '../src/allocations'
import { exists } from 'fs';

test(t => {
    return logic({ message: { content: 'taGrandeRace' } }).then(element => {
        t.true(allocations.includes(element.message.content))
    })
})
