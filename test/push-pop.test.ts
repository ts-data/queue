import { Expect, TestCase } from "alsatian";
import Queue from "../queue";

export class PushPopTestFixture {

    @TestCase(15)
    @TestCase(20)
    @TestCase("some string")
    @TestCase("another string")
    @TestCase(false)
    @TestCase(true)
    @TestCase(1.25)
    public afterPushPopShouldReturnValue(value: any) {
        let queue = new Queue();

        queue.push(value);

        let popped = queue.pop();

        Expect(popped).toBe(value);
    }

    @TestCase(15)
    @TestCase(20)
    @TestCase("some string")
    @TestCase("another string")
    @TestCase(false)
    @TestCase(true)
    @TestCase(1.25)
    public afterPushPopShouldReturnBottomValue(value: any) {
        let queue = new Queue();

        queue.push(value);

        // push some junk to the queue
        queue.push(5);
        queue.push(10);

        let popped = queue.pop();

        Expect(popped).toBe(value);
    }

}
