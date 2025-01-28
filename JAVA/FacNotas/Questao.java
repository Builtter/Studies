public class Questao {
    public static void main (String[] args){
        Integer a,b,c,d,e;
        int f;
        char r1,r2,r3,r4,r5;
        String s;
        a=1;
        b=1;
        c=a;
        d=b;
        f=1;
        e=f;
        
        r1=(a.equals(b))?'s':'n';
        r2=(a.equals(c))?'s':'n';
        r3=(a==d)?'s':'n';
        r4=(a==e)?'s':'n';
        r5=(a.equals(f))?'s':'n';
        s=""+r1+r2+r3+r4+r5;
        System.out.println(s);
    }
}