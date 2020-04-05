#include <bits/stdc++.h>

using namespace std;

class Array
{
    double *a;
    int n;

public:
    Array(int n)
    {
        this->n = n;
        this->a = new double[n];
        for (int i = 0; i < n; i++)
        {
            cout << "pt " << i << ": ";
            cin >> a[i];
        }
    }
    Array()
    {
        n = 0;
        a = NULL;
    }
    ~Array()
    {
        delete[] a;
    }
    void xuatPhanTu()
    {
        for (int i = 0; i < n; i++)
        {
            cout << "pt " << i << ": ";
            cout << a[i] << endl;
        }
    }
};

int main()
{
    Array arr = Array(5);
    arr.xuatPhanTu();

    return 0;
}