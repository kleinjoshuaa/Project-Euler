#find this prime
set idx 10001
set i 6
set pno 3
while { $pno < $idx} {
   unset -nocomplain b
    #puts "Checking primality of $i"
    if {[expr {$i % 6}] == 1 || [expr {$i % 6}] == 5} {
	#puts "$i is of the form 6k+-1, checking primality"  
	set facr [expr int(ceil(sqrt($i)))]
	#puts "checking integers up to $facr"
	for {set m 2} {$m <= $facr} {incr m} {
	       # puts "checking $m"
	    if {[expr $i % $m] == 0} {
		#puts "$m divides $i, so $i is not a prime factor"
		set b 0
		break;
	    }
	}
	if {![info exists b]} {
	    incr pno
	    puts "$i is the $pno prime"
	}
    } else {
	#puts "fails to be of the form 6k +1 or -1, not prime"
    }
incr i
}


exit