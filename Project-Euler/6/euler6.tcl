set max 100

set sumsq 0
set sum 0
for {set i 0} {$i <= $max} {incr i} {
    set sum [expr {$sum + $i}]
    set sumsq [expr {$sumsq + pow($i,2)}]
}



set sqsum [expr {pow($sum,2)}]

puts "Sum of the square: $sumsq"
puts "Square of the sums: $sqsum"

set diff [expr {$sqsum - $sumsq}]

puts "Difference: $diff"

exit