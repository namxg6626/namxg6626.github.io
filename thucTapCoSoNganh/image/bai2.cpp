#include <bits/stdc++.h>

using namespace std;

class SoPhuc
{
    float a, b;

public:
    SoPhuc(float a, float b)
    {
        this->a = a;
        this->b = b;
    }
    SoPhuc()
    {
        a = b = 0;
    }
    void xuat()
    {
        cout << a << " + " << b << "i" << endl;
    }

    SoPhuc operator+(SoPhuc x)
    {
        SoPhuc tg;
        tg.a = this->a;
        tg.b = this->b;
        tg.a = tg.a + x.a;
        tg.b = tg.b + x.b;
        return tg;
    }
};

int main()
{
    SoPhuc A, B;
    A = SoPhuc(3, 4);
    B = SoPhuc(4, 5);

    (A + B).xuat();
    return 0;
}