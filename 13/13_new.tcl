set filename "numbers.txt"
set file [open $filename r]
set lines [split [read $file] {,}]
close $file

 proc empty=0 x {expr {$x == ""? 0: $x}}

proc adda {xs ys} {
    set res {}
    set carry 0
    foreach x $xs y $ys {
        set sum [expr {[empty=0 $x] + [empty=0 $y] + $carry}]
        set carry [expr {$sum / 10000}]
        lappend res [expr {$sum % 10000}]
    }
    if $carry {lappend res $carry} else {set res}
 }

#set nums [array]
set i 0

set sum 0

foreach line $lines {
	puts "line $i"
	if {$line == ""} {continue}
        puts $line
	set nums($i)  $line
	#puts "The number is: $nums($i)"
	
	set sum [adda $sum $nums($i)]
	puts "The Sum is $sum"
	
	incr i
}





exit




