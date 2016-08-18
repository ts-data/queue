import { Expect, Test } from "alsatian";
import Queue from "../queue";

export class CountTestFixture {

    @Test()
    public newQueueCountShouldBeZero(): void {
        let queue = new Queue();

        Expect(queue.count()).toBe(0);
    }

    @Test()
    public queueWithOneItemCountShouldBeOne(): void {
        let queue = new Queue<number>();

        queue.push(5);

        Expect(queue.count()).toBe(1);
    }

    @Test()
    public queueWithTwoItemsCountShouldBeTwo(): void {
        let queue = new Queue<number>();

        queue.push(5);
        queue.push(100);

        Expect(queue.count()).toBe(2);
    }

    @Test()
    public emptyQueueCountShouldBeZero(): void {
        let queue = new Queue<number>();

        // add one item, then remove it again
        queue.push(5);
        queue.pop();

        Expect(queue.count()).toBe(0);
    }

}
