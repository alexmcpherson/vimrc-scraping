task :read_files => :environment do

  Dir.foreach('./files') do |file|
    next if file == '.' or file == '..'

    File.open('./files/' + file).each do |line|
      user = User.find_by_handle(file)
      newLine = Line.new({:user_id => user.id, :contents => line})
      newLine.save
    end
    # u = User.new
    # u.handle = file
    # u.save
    # puts file.to_s + " saved as a user"

  end

end

