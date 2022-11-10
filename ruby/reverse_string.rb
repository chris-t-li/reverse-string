def reverse_string(str)
  reverse_str = ""

  while str.length > 0
    reverse_str = str[0]+reverse_str
    str = str[1...]
  end

  reverse_str
end


if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution