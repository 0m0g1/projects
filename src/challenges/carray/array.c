#include <stdio.h>
#include <stdlib.h>

int main() {
    int no = 10;
    int *addressofno = &no;
    printf("Addressof: %d \n", addressofno);
    int *ptr = no;
    printf("Addressof: %d \n", ptr);
    int *ptro = &addressofno;
    printf("Addressof: %d \n", ptr);
}