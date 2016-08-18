import { Expect, Test } from "alsatian";
import Queue from "../queue";

export class PeekTestFixture {

    @Test()
    public peekShouldReturnBottomValue() {
        const value = 3;

        let queue = new Queue();
        queue.push(value);

        // add another so that "value" is at the bottom
        queue.push(5);

        Expect(queue.peek()).toBe(value);
    }

    @Test()
    public peekShouldNotRemoveTheItem() {
        const value = 3;

        let queue = new Queue();
        queue.push(value);

        queue.peek();

        Expect(queue.count()).toBe(1);
    }

    @Test()
    public peekShouldReturnTheSameValueAfterMultipleCalls() {
        const value = 3;

        let queue = new Queue();
        queue.push(value);

        queue.peek();
        queue.peek();
        queue.peek();
        queue.peek();

        Expect(queue.peek()).toBe(value);
    }

}
