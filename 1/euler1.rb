# Problem 1 of Project Euler
#Written for The Odin Project
#(c) 2015 Joshua Klein

#Find the sum of all multiples of 3 or 5 below 1000

max_num = 1000;
$sum_total = 0



for i in 0..max_num-1 
	if(i % 3 ==0 || i %5 == 0) 	
		$sum_total+=i
	end
end

puts($sum_total)