from crewai import Task
from tools import tool
from agents import news_researcher, news_writer

# Research Task: Search reliable sources for the latest news
research_task = Task(
    description=(
        "Find the most recent and relevant news articles related to {topic}. "
        "Ensure sources are established (e.g., Google News, NYT, BBC) and skip unnecessary details."
    ),
    expected_output='A concise report on the latest, most relevant news for {topic}.',
    tools=[tool],
    agent=news_researcher,
)

# Writing Task: Summarize findings into key points
write_task = Task(
    description=(
        "Provide a summary of the top 3-5 news points related to {topic}, "
        "sourced from established news outlets. Keep the summary concise and focused."
    ),
    expected_output='A summary of the top 3-5 key news points related to {topic}.',
    tools=[tool],
    agent=news_writer,
    async_execution=False,  # Disable async for faster sequential task processing
)
