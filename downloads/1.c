#include <stdio.h>

struct MyStruct {
    int counter;
};

int main() {
    struct MyStruct x;
    x.counter = 1;

    while (x.counter < 10) {
        x.counter *= 2;
    }

    printf("%d\n", x.counter);

    // C語言中不需要顯式刪除結構體成員

    return 0;
}
