class Node {
  constructor(data, left = null, right = null) {
    this.left = left;
    this.data =data;
    this.right = right;
  }
}

class BinaryTree {
  constructor(node) {
    if (node) {
      this.root = node;
    } else {
      this.root = null;
    }
  }
  inorder(p = this.root) {
    if (p) {
      this.inorder(p.left);
      process.stdout.write(" " + p.data);
      this.inorder(p.right);
    }
  }
  preorder(p = this.root) {
    if (p) {
      process.stdout.write(" " + p.data);
      this.preorder(p.left);
      this.preorder(p.right);
    }
  }
  postorder(p = this.root) {
    if (p) {
      this.postorder(p.left);
      this.postorder(p.right);
      process.stdout.write(" " + p.data);
    }
  }

  height(p = this.root) {
    if (p === null) {
      return 0;
    } else {
      const leftHeight = this.height(p.left);
      const rightHeight = this.height(p.right);

      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
  leaves(p = this.root) {
    if (p === null) {
      return 0;
    } else if (p.left === null && p.right === null) {
      return 1;
    } else {
      return this.leaves(p.left) + this.leaves(p.right);
    }
  }

  totalNodes(p = this.root) {
    if (p === null) {
      return 0;
    } else {
      return this.totalNodes(p.left) + this.totalNodes(p.right) + 1;
    }
  }
/**
 * 
 * @param {number} key 
 * @param {'left'|'right'} direction 
 */
  insertOne(key,direction){
    if(!this.root){
        this.root=new Node(key);
        return;
    }
    let p =this.root,t;
  
        while(p){
            t=p;
           p =p[direction];
        }
        t[direction]=new Node(key);
    
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(node) {
    super(node);
  }

 /**
  * @param {number} data 
  */
  insertOne(data) {

     if(!this.root){
        this.root = new Node(data);
     }else{

    
        let p = this.root,r;
     

       while(p){
        r=p;
        if(data<p.data){

            p =p.left;
        }else if(data>p.data){
            p= p.right

        }else{
            return ;
        }
       }

       if(data<r.data){
        r.left= new Node ( data);

       }else{
        r.right =new Node(data);
       }
    
        
     }
  
  }
   /**
   * @param {Array<number>} data
   */
  insertMany(data) {

    for(var i=0; i<data.length; i++){
        this.insertOne(data[i]);
    }

  }
/**
 * 
 * @param {number} key 
 * @returns  {boolean}
 */
  search (key){

    let p = this.root;

    while(p){
        if(key<p.data){
            p =p.left
        }else if(key>p.data){
            p=p.right;
        }else{
            return true;
        }
    }
    return false;
  }
}


const bst= new BinarySearchTree();


bst.insertMany([1,5,3,6]);
bst.preorder();
console.log(bst.search(6))
