#set primefactors [list]
#set factors [list]
set num 600851475143
#set num 13195

set sqrt [expr int(ceil(sqrt($num)))]
set j 0

puts "Square root of $num is $sqrt"

proc factorial {n} {
    set q $n
    set ret 1
    while {[expr {$q-1}] > 0} {
	set ret [expr $ret*($q)]
	set q [expr {$q-1}]
    }
return $ret
}




for {set i 1} {$i < $sqrt} {incr i} {
    if {[expr {$num % $i}] == 0} {
	set factors($j) $i
	incr j
    }
}



for {set k 0} {$k < $j} {incr k} {
    puts "Checking primality of $factors($k)"
    if {[expr {$factors($k) % 6}] == 1 || [expr {$factors($k) % 6}] == 5} {
	#puts "$factors($k) is of the form 6k+-1, checking primality"
	set fac  $factors($k)  
	set facr [expr int(ceil(sqrt($fac)))]
	puts "checking integers up to $facr"
	for {set m 2} {$m < $facr} {incr m} {
	   # puts "checking $m"
	    if {[expr $fac % $m] == 0} {
		puts "$m divides factor $fac, so $fac is not a prime factor"
		set b 0
		break;
	    }
	}
	if {![info exists b]} {
	    puts "$fac is prime"
	}
    } else {
	puts "fails to be of the form 6k +1 or -1, not prime"
    }

}

exit