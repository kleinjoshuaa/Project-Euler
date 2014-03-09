set a 3
set b 4
set c 5
set k 0
set r 0

while {1} {
    incr r
    set k [expr {pow($r,2)}]

   # puts "$r squared is $k!"
    for {set i 4} {$i < $r} {incr i} {
	for {set j 3} {$j < $i} {incr j} {
	    
	    if {[expr {pow($i,2)+pow($j,2)}] == [expr {pow($r,2)}]} {
		set a $j
		set b $i
		set c $r
		puts "$a + $b + $c = [expr $a + $b + $c]"
		if {[expr $a + $b + $c] == 1000} {
		    set z 0
		    break;
		}
	    } 
	    if {[info exists z]} {
		break;
	    }
	}
	if {[info exists z] } {
	    break;
	}

    }
    if {[info exists z] } {
	break;
    }
}

puts "a = $a, b = $b, c = $c" 
puts "abc = [expr $a * $b * $c]"

exit