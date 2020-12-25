proc paltes {n} {
    set length [string length $n]
    set hal [expr int(ceil($length / 2))]
    for {set k 0} {$k < $hal} {incr k} {
	if {![string equal [string index $n $k] [string index $n [expr $length-$k-1]]]} {
	    set pal 0
	    break;
    }
    }
    if {![info exists pal]} {
	set pal 1
    }
return $pal 
}
set q 0
for {set i 100} {$i < 999} {incr i} {
    for {set j 100} {$j < 999} {incr j} {
	set num [expr {$j * $i}]
	if {[paltes $num]} {
	   set  pals($q) $num
	    incr q
	    #puts "$num is a palindrome!"
	}
    }
}

set paly 0
for {set m 0} {$m < $q} {incr m} {
    if {$pals($m) > $paly} {
	set paly $pals($m)
    }
}

puts "Largest palindrome is $paly"

exit