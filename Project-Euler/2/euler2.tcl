set sum 0
set fib 1
set fibs(0) 1
set fibs(1) 1
set i 1


puts "Fibonacci Sequence: "
puts "===================="

while {$fib < 4000000} {
    set fib [expr $fibs($i) + $fibs([expr $i - 1])]
    #puts "${fib}"
    incr i
    set fibs($i) $fib
    if {[expr $fib % 2] == 0 } {
        set sum [expr $sum + $fib]
        puts $fib
    }
}

puts ""
puts "Sum of all even terms: ${sum}"

exit
