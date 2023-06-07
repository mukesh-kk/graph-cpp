#include <iostream>
#include <queue>

using namespace std;
 
void BFS(int vtx, int A[][8], int n){
    queue<int> Q;
    int visited[8] {0};
 
    // Initial
    cout << vtx << ", " << flush;  // Visit vertex
    visited[vtx] = 1;
    Q.emplace(vtx);
 
    // Explore
    while (!Q.empty()){
        int u = Q.front();  // Vertex u for exploring
        Q.pop();
        for (int v=1; v<=n; v++){  // Adjacent vertices of vertex u
            if (A[u][v] == 1 && visited[v] == 0){  // Adjacent vertex and not visited
                cout << v << ", " << flush;  // Visit vertex
                visited[v] = 1;
                Q.emplace(v);
            }
        }
    }
    cout << endl;
}
 
int main (){

    //create a adjacency matrix
 
    int A[8][8] = {{0, 0, 0, 0, 0, 0, 0, 0},
                   {0, 0, 1, 1, 1, 0, 0, 0},
                   {0, 1, 0, 1, 0, 0, 0, 0},
                   {0, 1, 1, 0, 1, 1, 0, 0},
                   {0, 1, 0, 1, 0, 1, 0, 0},
                   {0, 0, 0, 1, 1, 0, 1, 1},
                   {0, 0, 0, 0, 0, 1, 0, 0},
                   {0, 0, 0, 0, 0, 1, 0, 0}};
 //start form vertex 1
    cout << "Vtx 1 -> " << flush;
    BFS(1, A, 8);
 
 // start from vertex 8
    cout << "Vtx: 4 -> " << flush;
    BFS(4, A, 8);
 
 
    return 0;
}