# Problem 3 of Project Euler
# Written for The Odin Project
# (c) 2015 Joshua Klein
# What is the largest prime factor of the number 600851475143 ?
 $num = 600851475143;



 $sqrt = Math.sqrt($num);
 $j = 0;
# i, k, m, fac, facr;
 $factors = [];
puts("Square root of " + $num.to_s + " is " + $sqrt.to_s);

def factorial(n) 
     q = n;
     ret = 1;
    while ((q - 1) > 0) do
        ret *= q;
        q -= 1;
    end
    return ret;
end

for i in 1..$sqrt-1 
    if ($num % i == 0) 
        $factors[$j] = i;
        $j += 1;
    end
    
end
    
for k in 0..$j-1 
    puts("Checking primality of " + $factors[k].to_s);
    if ($factors[k] % 6 == 1 || $factors[k] % 6 == 5) 
        #puts(factors[k]+" is of the form 6k+-1, checking primality");
        fac = $factors[k];
        # facr = Math.floor(Math.ceil(Math.sqrt(fac)));
        facr = Math.sqrt(fac).ceil.floor
         puts("checking integers up to " + facr.to_s);
        for m in 2..facr-1 
            # puts("checking "+m);
            if (fac % m == 0) 
                puts(m.to_s + " divides factor " + fac.to_s + ", so " + fac.to_s + " is not a prime factor")
                    b = 0;
                break;
            end 
        end
        if (b.nil?) 
            puts(fac.to_s + " is prime");
        end
     else 
        puts("fails to be of the form 6k +1 or -1, not prime");
    end
end