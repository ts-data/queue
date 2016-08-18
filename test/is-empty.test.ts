import { Expect, Test } from "alsatian";
import Queue from "../queue";

export class IsEmptyTestFixture {

    @Test()
    public newQueueShouldBeEmpty(): void {
        let queue = new Queue();

        Expect(queue.isEmpty()).toBe(true);
    }

    @Test()
    public emptyQueueShouldBeEmpty(): void {
        let queue = new Queue<number>();

        // add a single element, then remove it again
        queue.push(5);
        queue.pop();

        Expect(queue.isEmpty()).toBe(true);
    }

    @Test()
    public queueWithOneItemShouldNotBeEmpty(): void {
        let queue = new Queue<number>();

        // add a single element
        queue.push(5);

        Expect(queue.isEmpty()).toBe(false);
    }

    @Test()
    public queueWithTwoItemsShouldNotBeEmpty(): void {
        let queue = new Queue<number>();

        // add a single element
        queue.push(5);
        queue.push(5);

        Expect(queue.isEmpty()).toBe(false);
    }

}
