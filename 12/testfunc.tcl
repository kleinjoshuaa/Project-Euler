proc goesInto {num div} {
	# how many times does m go into n EVENLY
	set decr_num $num
	set div_incr 0
	while {[string is integer ${decr_num}] && $decr_num > 0} {
		set decr_num [expr {${decr_num} / $div}]
		incr div_incr
	}

	puts "$div goes into $num $div_incr times"
	return [expr {int(log($num)/log($div))}]
}

