proc setPrimes {n} {
	#global prime
	#set prime 
	set primes [list]
# sets prime(q) as the i-th prime
    for {set i 0} {$i < [expr {$n+1}]} {incr i} {
	set rd($i) "r"
    }
	set rd(0) "d"
	set rd(1) "d"
	set p 2
	while {[expr {pow($p,2)}] <= $n} {
	    if {$rd($p) == "r"} {
		for {set j 2} {[expr {$j*$p}] <= $n} {incr j} {
		    set rd([expr {$j*$p}]) "d"
		}
	    } 
	    incr p
	}
	for {set p 2} {$p <= $n} {incr p} {
	    if {$rd($p) == "r"} {
		lappend primes $p
		#set $prime($q) $p
	    }
	} 
array unset rd
return $primes
}

proc numTri {n} {
    # this is the n-th triangle number
	
	return [expr {(pow($n,2) + $n)/2}]
} 

proc goesInto {num div} {
	# how many times does m go into n EVENLY
	return [expr {int(log($num)/log($div))}]
}

proc priFact {n} {
    # returns the powers of the prime factorization of n
	set plist [list]
	#get the primes less than n/2
	set n2 [expr {1+int(($n/2))}]
	set primes [setPrimes $n2]
	#puts $primes
	# decrementer
	set ndec $n
	
	for {set i 0} {$i < [llength $primes]} {incr i} {
		# this gives you the prime number in the index of i
		set prime [lindex $primes $i]
		# does it divide n evenly? If not then continue
		if {[expr {fmod($n,$prime)}] != 0} {continue}
		# since it does divide evenly, lets divide until it doesn't
		# setup counter variable
		set j 0
		while {[expr {fmod($ndec,$prime)}] == 0} {
			set ndec [expr {$ndec / $prime}]
			incr j
		}
		# now we have j, which is how many times this prime goes into n
		# and we have ndec, which is the remainder of the number to be factored
		
		# j is added to the list of prime factorization exponents
		# dec is persistent and is used the next time for finding 
		# how many times the prime goes into the composite
		lappend plist $j
	}
	
	return $plist
}

proc numDiv {n} {
	#returns the number of divisors of n
	set pfactor [priFact $n]
	#puts "exponents of factors is $pfactor"
	set divs 1
	for {set i 0} {$i < [llength $pfactor]} {incr i} {
		set divs [expr {(1+[lindex $pfactor $i])*$divs}]
	}
	return $divs
}

set i 0
set n 1
set divisors 0

#[numDiv 96580]

while {$divisors < 500} {
	set tri [numTri $n]
	#puts $tri
	set divisors [numDiv $tri]
	#puts $divisors
	puts "$tri, the ${n}-th triangular number has $divisors divisors"
	incr n
#}
exit