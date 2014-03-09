set filename "numbers.txt"
set file [open $filename r]
set lines [split [read $file] {:}]
close $file

puts $lines

for {set i 0} {$i < 50} {incr i} {
	set sum($i) 0
}
set numlines [llength $lines]
puts "length: $numlines"
for {set p 0} {$p < 100 } {incr p} {
	set line [lindex $lines $p]
	set linlength [string length $line]
	#puts "$linlength is the length of the line"
	for {set j 0} {$j < [string length $line]} {incr j} {
		puts "$sum($j) + [string index $line $j]"
		set sum($j) [expr {$sum($j) + [string index $line $j]}]
		puts "Equals $sum($j)"
	}
}

#for {set k 0} {$k < 50} {incr k} {
	#puts "power of 10: [expr {50 - $k}] : $sum($k)"
#}

# reverse the order of the array and make a new array
for {set m 0} {$m < 50 } {incr m} {
	set rsum($m) $sum([expr {49-$m}])
#	puts "$rsum($m) == $sum([expr {49-$m}])"
}

#add up the three values from each triplet (let's just go up to 15 for this exercise)
set summation [list]
set sumctr 0
for {set n 0} {$n < 15} {incr n} {
set l1 [split $rsum($n)
set l2 [split $rsum([expr {$n+1}])]
set l3 [split $rsum([expr {$n+2}])]
set l0 [lindex $summation $n]

}

puts "number is $summation

exit

