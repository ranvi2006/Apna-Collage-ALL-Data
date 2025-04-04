class Main {

    public static void mergeSortedArray(int nums1[], int nums2[]) {

        int i = 0;
       int j = 0;

        // --------
        while(i<nums1.length && j<nums2.length)
{

if(nums1[i]<=nums2[j])
{
i++;
}
else
{

for(int k=nums1.length-1;k>i;k--)
{
    nums1[k]=nums1[k-1];

}

nums1[i]=nums2[j];
j++;
}





}
                  

       
 
    }

    public static void main(String args[]) {
    int nums1[] = {4, 5, 6, 0, 0, 0}; 
int nums2[] = {1, 2, 3}; 

        mergeSortedArray(nums1, nums2);
 for (int k = 0; k < nums1.length; k++) {
            System.out.print(nums1[k] + "   ");
        }

    }
}
