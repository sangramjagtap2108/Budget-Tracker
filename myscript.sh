start_time=$(date +%s%N)
docker run --cpuset-cpus="0-1" sangy2108/budget-tracker:1
# Assuming the container logs a message when it's fully started:
docker logs 601900e148a3 2>&1 | grep "Your application startup log message"
end_time=$(date +%s%N)
echo "Startup time in nanoseconds: $(($end_time - $start_time))"