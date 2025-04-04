import java.util.ArrayList;
 class Q1My {
public static void removeDuplicate(int arr[])
{
    ArrayList<Integer>array=new ArrayList<>();
    array.add(arr[0]);
    int priv=0;
    int curr=0;
    for(int i=0;i<arr.length;i++)
    {
        priv=i-1;
        curr=i;
        if(arr[priv]!=arr[curr])
        {
            array.add(arr[curr]);
            System.out.print(arr[curr]+" " );
        }
       
    }
    

    array.listIterator();
    

}
    public static void main(String[] args) {
        int array[]={0,1,1,1,2,2,3};

        removeDublicate(array);
    }
}