# Problem 2 of Project Euler
# Written for The Odin Project
# (c) 2015 Joshua Klein

# Find the sum of all the even terms in the Fibonacci
# sequence whose values do not exceed 4 million

$max = 4000000
$sum = 0

$fib_nums = [1,2]

puts("Fibbonacci Sequence")
puts("===================")

while $fib_nums[1] < $max do
	 if($fib_nums[1] % 2 === 0) 
		$sum += $fib_nums[1] 
	end
 oldFibNum = $fib_nums[1];
 $fib_nums[1] = $fib_nums[0]+$fib_nums[1];
 $fib_nums[0] = oldFibNum
	if $fib_nums[1] %2 == 0
		puts('Even number: '+$fib_nums[1].to_s)
	end
end


puts('Sum of all even terms: '+$sum.to_s);
